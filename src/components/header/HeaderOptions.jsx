import "./headeroptions.css"

const HeaderOptions = ({ avatar, Icon, title, onClick }) =>{
    return <div className="headerOption" onClick={onClick}>
    {Icon && <Icon className="headerOption__icon" />}
    {avatar && (
      <div>
        <img src={avatar} alt="" className="headerOption__icon" />
      </div>
    )}
    <h3 className="headerOption__title">{title}</h3>
  </div>
}

export default HeaderOptions