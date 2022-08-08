import './blog.styles.scss'

const Blog = () => {
  return (
    <div className='blogContainer'>
      <div variant='h1' className="blogTitle">
        Thoughts on Web Development
      </div>
      <div className='blog'>
        <div variant="h4" className="blogCard">
        While Material UI is a great framework for building UI, the standards of UI have created a lack of interesting websites. Large corporations through there advertising and marketing draw and keep clients, but to create fresh design and intrigue in a website requires thought and creativity. This has to be combined with utilitarianism and the ability to create a website that is user friendly and easy to use. Websites should be image rich, yet simple and easy to use.
        </div>  
      </div>
      <div variant='h3' className="contactFootnote" color='white'>
      contact: dorje@bridgecitytek.com
      </div>
    </div>
  );
}

export default Blog;

