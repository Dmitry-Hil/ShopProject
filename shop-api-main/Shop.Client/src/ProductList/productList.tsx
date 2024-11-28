import "./productList.css"; // Импорт стилей

export interface ProductListProps { 
  title: string;   
  price: number;
  comments: number; 
  url: string;
}

export const ProductList = ({
  title,
  price,
  comments,
  url
}: ProductListProps) => {

  return (
    <div className="close-image-wrapper">      
      <a className="close-title" href="/">{title}</a>
      <img src={url} alt={title} /> 
      <div>
        <span className="close-label">Price:</span>
        {price}
      </div>
      <div>
        <span className="close-label">Comments:</span> 
        {comments}
      </div>
    </div>
  );
}