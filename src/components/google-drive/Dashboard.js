import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useFolder } from "../../hooks/useFolder";
import AddFolderButton from "./AddFolderButton";
import Folder from "./Folder";
import Navbar from "./Navbar";
import { useParams} from "react-router-dom";
import FolderBreadcrumbs from "./FolderBreadcrumbs";
import AddFileButton from "./AddFileButton";
import File from "./File";
import Chatbot from "./ChatBot"; // Import your Chatbot component
import "../../index.css"

export default function Dashboard() {
  const { folderId } = useParams();
  const { folder, childFolders, childFiles } = useFolder(folderId);
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => setShowChatbot((prev) => !prev);

  const [files, setFiles] = useState([
    { id: "1", name: "example.txt", content: "Some content" },
    { id: "2", name: "document.pdf", content: "Another content" },
  ]);

  // Define onDelete function to remove file
  const handleDelete = (fileToDelete) => {
    setFiles(files.filter((file) => file.id !== fileToDelete.id));
  };

  const handleUpdate = (updatedFile) => {
    const updatedFiles = files.map((file) =>
      file.id === updatedFile.id ? updatedFile : file
    );
    setFiles(updatedFiles);
  };

  return (
    <>
      <Navbar />
      <Container fluid>
        <div className="d-flex align-items-center fw-bold">
          <FolderBreadcrumbs currentFolder={folder} />
          <AddFolderButton currentFolder={folder} />
          <AddFileButton currentFolder={folder} />
        </div>
        {Array.isArray(childFolders) && childFolders.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFolders.map((child) => (
              <div key={child.id} style={{ maxWidth: "200px" }} className="p-2">
                <Folder folder={child} />
              </div>
            ))}
          </div>
        )}
        {Array.isArray(childFiles) && childFiles.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFiles
              .filter((child) => child.folderId === folderId)
              .map((child) => (
                <div key={child.id} style={{ maxWidth: "200px" }} className="p-2">
                  <File
                    file={child}
                    onDelete={handleDelete} // Pass the delete handler to File component
                    onUpdate={handleUpdate} // Pass update handler if needed
                  />
                </div>
              ))}
          </div>
        )}

        {/* Button to toggle chatbot */}
        <button
          onClick={toggleChatbot}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            padding: "12px 16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "50%",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            cursor: "pointer",
            zIndex: 1000,
          }}
        >
          {showChatbot ? "✖" : "💬"}
        </button>

        {/* Chatbot Box */}
        {showChatbot && (
          <div
            style={{
              position: "fixed",
              bottom: "80px", // Adjusted position above the button
              right: "20px",
              width: "300px",
              height: "400px",
              zIndex: 999,
            }}
          >
            <Chatbot /> {/* Render the Chatbot component */}
          </div>
        )}
      </Container>
    </>
  );
}
