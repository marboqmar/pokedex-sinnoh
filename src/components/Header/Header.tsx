import "./Header.scss";

export const Header = () => {
  return (
    <div className="header">
      <img className={"header--logo"} src={"/logo.png"} alt="logo" />
      <input
        className={"font header--search-bar"}
        type={"text"}
        placeholder={"Search by name"}
      />
      <i className="fa-solid fa-list-ul"></i>
      <i className="fa-regular fa-heart"></i>
      <i className="fa-solid fa-circle-half-stroke"></i>
    </div>
  );
};
