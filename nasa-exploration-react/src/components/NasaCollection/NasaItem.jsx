import "./NasaItem.css";
export default function NasaItem({ item }) {
  const hasData = item.data && item.data[0];
  const hasLinks = hasData && item.links && item.links[0];

  if (!hasData) return null;

  return (
    <div className="nasa-item-card">
      <h2 className="nasa-item-title">Title: {item.data[0].title}</h2>
      <p className="nasa-item-description">Description: {item.data[0].description}</p>
      <p className="nasa-item-id">Nasa_Id: {item.data[0].nasa_id}</p>
      {hasLinks && (
        <img
          src={item.links[0].href}
          alt={item.data[0].title}
          className="nasa-item-image"
          width="300"
        />
      )}
    </div>
  );
}
