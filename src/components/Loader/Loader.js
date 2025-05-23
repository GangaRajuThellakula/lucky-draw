import "./Loader.css";
function Loader(props) {
    let {text,onClick} = props
    return ( 
        <div className="center">
        {/* <h2 className="load">Loading..</h2> */}
      <button className="margin-10 button" onClick={onClick} >{text}</button>

      </div>
     );
}

export default Loader;