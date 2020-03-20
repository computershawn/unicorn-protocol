import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import ProjectThumbnail from '../../components/ProjectThumbnail/ProjectThumbnail'


const allProjectsContainerStyle = {
  'display': 'flex',
  'flex-flow': 'row wrap'
};

export default class BlogIndexPage extends React.Component {
  render() {
    // FAKE PROJECT ID NUMBERS FOR NOW...
    let projects = ["s6y7l68f", "o47ck86e", "uvn1rybu", "5b4a07sg", "3crgkknc", "l3tet2pg", "h8kke0mn"];//, "168s5pn6", "0edthmw4"];
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              backgroundColor: '#f40',
              color: 'white',
              padding: '1rem',
            }}
          >
            Hi Jayne
          </h1>
        </div>

        <section className="section">
          {/* <div className="container"> */}
            <div className="all-projects-container" style={allProjectsContainerStyle}>
              {projects.map(projectID => <ProjectThumbnail itemID={ projectID }/>)}
            </div>
          {/* </div> */}
        </section>

        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
