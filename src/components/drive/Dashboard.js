import React from "react";
import NavBar from "./NavBar";
import { Container } from "react-bootstrap";
import AddFolderButton from "./AddFolderButton";
import { useFolder } from "../hooks/useFolder";
import Folder from "./Folder";
import FolderBreadcrumbs from "./FolderBreadcrumbs";
import { useParams, useLocation } from "react-router-dom";
import AddFileButton from "./AddFileButton";
import File from "./File";

export default function Dashboard() {
  const { folderId } = useParams();
  const { state = {} } = useLocation();
  const { folder, childFolders, childFiles } = useFolder(folderId, state?.folder);

  return (
    <>
      {/* <NavBar /> */}
      <Container fluid>
        <div className="d-flex align-items-center">
          <FolderBreadcrumbs currentFolder={folder} />
          <AddFileButton currentFolder={folder} />
          <AddFolderButton currentFolder={folder} />
        </div>
        {childFolders.length > 0 && (             
          <div className="d-flex flex-wrap">
            {childFolders.map((childFolder) => (
              <div
                key={childFolder.id}
                style={{ maxWidth: "150px" }}
                className="p-2"
              >
                <Folder folder={childFolder} />
              </div>
            ))}
          </div>
        )}
        {childFolders.length > 0 && childFiles.length > 0 && <hr />}
        {childFiles.length > 0 && (             
          <div className="d-flex flex-wrap">
            {childFiles.map((childFile) => (
              <div
                key={childFile.id}
                style={{ maxWidth: "150px" }}
                className="p-2"
              >
                <File file={childFile} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </>
  );
}

