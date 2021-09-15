import React from "react";

interface IProps {
  personne: {
    name: string;
    min: number;
    url: string;
    note?: string;
  }[];
}

const List: React.FC<IProps> = ({ personne }) => {
  const renderList = () => {
    return personne.map((person) => {
      return (
        <li className="List">
          <div className="List-header">
            <img className="List-img" src={person.url} />
            <h2>{person.name}</h2>
          </div>
          <p>il y as {person.min} min</p>
          <p className="List-note">{person.note}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
