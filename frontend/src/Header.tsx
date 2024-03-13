import logo from './Bowling.jpg';

function Header(props: any) {
  return (
    <header className="row header navbar navbar-dark bg-dark">
      <div className="col-4">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="col subtitle">
        <h1 className="text-white">{props.title}</h1>
        <p className="text-white">
          This website displays a list of bowlers and their information on the
          Marlins and Sharks teams.
        </p>{' '}
      </div>
    </header>
  );
}

export default Header;
