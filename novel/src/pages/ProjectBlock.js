import React from "react";

// acha os projeto publico de td mundo e leva pra ver
const ProjectBlock = ({ id, name, imageUrl }) => {
  console.log(imageUrl)
  return (
    <div 
      style={styles.block} 
      onClick={() => window.location.href = `/project/view/${id}`}
    >
      <img src={imageUrl} alt={name} style={styles.image} />
      <h2 style={styles.name}>{name}</h2>
    </div>
  );
};

// acha os teus projetos e leva pra editar
const ProjectBlock2 = ({ id, name, imageUrl }) => {
  console.log(imageUrl)
  return (
    <div 
      style={styles.block} 
      onClick={() => window.location.href = `/project/${id}`}
    >
      <img src={imageUrl} alt={name} style={styles.image} />
      <h2 style={styles.name}>{name}</h2>
    </div>
  );
};

// mostra as cenas do projeto e leva pra editar elas
const ProjectBlock3 = ({ id, name, imageUrl }) => {
  console.log(imageUrl)
  return (
    <div 
      style={styles.block} 
      onClick={() => window.location.href = `/scene/${id}`}
    >
      <img src={imageUrl} alt={name} style={styles.image} />
      <h2 style={styles.name}>{name}</h2>
    </div>
  );
};

const styles = {
  block: {
    border: "1px solid #ccc",
    padding: "12px",
    margin: "8px",
    borderRadius: "8px",
    textAlign: "center",
    width: "200px",
    height: "150px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    cursor: "pointer", // Indica que o bloco é clicável
    transition: "transform 0.2s ease", // Animação ao passar o mouse
  },
  name: {
    fontSize: "1.2em",
    margin: "0",
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: '8px',
  },
};

// Adiciona efeito de hover
styles.block[':hover'] = {
  transform: "scale(1.05)",
};

export { ProjectBlock, ProjectBlock2, ProjectBlock3 };