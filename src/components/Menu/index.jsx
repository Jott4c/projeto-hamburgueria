import { ContainerMenu, InputPesquisa, Nav } from "./styles";

export default function Menu({ handleSearch, inputValue, setInputValue }) {
  return (
    <Nav>
      <ContainerMenu>
        <div className="logo">
          <h1>Burguer</h1>
          <p>Kenzie</p>
        </div>

        <InputPesquisa>
          <input
            type="text"
            onChange={(e) => {
              setInputValue(e.target.value);
              handleSearch(e.target.value.toLocaleLowerCase());
            }}
          />
          <button onClick={() => handleSearch(inputValue)}>Pesquisar</button>
        </InputPesquisa>
      </ContainerMenu>
    </Nav>
  );
}
