import "./YouTube.css";
function YouTube({ movie }) {
  //   YouTube.propTypes = {
  //     movie: PropTypes.string.isRequired,
  //   };
  return (
    <div className="video-responsive">
      <iframe
        width="369.156"
        height="369.156"
        src={movie}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
}

export default YouTube;
