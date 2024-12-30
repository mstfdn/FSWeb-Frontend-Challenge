import PropTypes from 'prop-types';

function Section({ sectionId, title, items }) {
  if (!items || items.length === 0) {
    return (
      <section id={sectionId} className="p-8">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p>No items available.</p>
      </section>
    );
  }

  return (
    <section id={sectionId} className="p-8">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.id} className="border p-4 shadow-md rounded-md hover:shadow-lg transition-shadow">
            <h3 className="font-bold">{item.title}</h3>
            <p>{item.description}</p>
            {item.tags && item.tags.length > 0 && (
              <div className="flex space-x-2 mt-2">
                {item.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-gray-200 text-sm rounded">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

// PropTypes ekliyoruz
Section.propTypes = {
  sectionId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
};

export default Section;
