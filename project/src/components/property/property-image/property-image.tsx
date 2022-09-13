type PropertyImageProps = {
  src: string;
}

function PropertyImage({ src }: PropertyImageProps): JSX.Element {
  return (
    <div className="property__image-wrapper">
      <img
        src={src}
        className="property__image"
        alt="Studio"
      />
    </div>
  );
}

export default PropertyImage;
