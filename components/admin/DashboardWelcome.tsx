import React from "react";

export default function DashboardWelcome() {
  return (
    <div
      style={{
        padding: "1.5rem 2rem",
        marginBottom: "1.5rem",
        backgroundColor: "#e9f6ea",
        borderRadius: "0.5rem",
        borderLeft: "4px solid #307b34",
      }}
    >
      <h2
        style={{
          margin: "0 0 0.5rem 0",
          fontSize: "1.25rem",
          fontWeight: 600,
          color: "#2a332b",
        }}
      >
        Welcome to Express Foods CMS
      </h2>
      <p style={{ margin: 0, color: "#5f6561", lineHeight: 1.5 }}>
        Use the collections below to manage your website content — products,
        blog posts, pages, and media. Changes you make here will appear on the
        live website.
      </p>
    </div>
  );
}
