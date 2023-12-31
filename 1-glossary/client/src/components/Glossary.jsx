import React, { useState } from "react";
import GlossaryEditor from "./GlossaryEditor.jsx";

const Glossary = ({ words, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {words?.length ? (
        words.map((word, index) => (
          <div key={index}>
            {isEditing ? (
              <GlossaryEditor
                isAdding={false}
                callback={(newWord) => {
                  onEdit(newWord);
                  setIsEditing(!isEditing);
                }}
                originalWord={word}
              ></GlossaryEditor>
            ) : (
              <div>
                <div>{word.term}</div>
                <div>{word.description}</div>
              </div>
            )}
            <div>
              <button
                onClick={(event) => {
                  event.preventDefault();
                  onDelete(word);
                }}
              >
                delete
              </button>
              {isEditing ? null : (
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    setIsEditing(!isEditing);
                  }}
                >
                  edit
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <div>No words found</div>
      )}
    </div>
  );
};

export default Glossary;
