const Actions = require("./actions/Actions.js")
const Controls = require("./components/Controls.js")
const GroupingControls = require("./components/GroupingControls.js")
const Header = require("./components/Header.js")
const ImageSizeInput = require("./components/ImageSizeInput.js")
const Images = require("./components/Images.js")
const React = require("react")
const fetch = require("isomorphic-unfetch")
const globalCSS = require("./styles/global.css.js")
const pubsub = require("pubsub-js")

const DEFAULT_STATE = { imageSize: 50, filters: new Set() }

class Index extends React.Component {
  state = DEFAULT_STATE

  static getInitialProps = async ({ req: request }) => {
    const response = await fetch("http://localhost:3001")
    const { images } = await response.json()
    return { images }
  }

  componentWillMount() {
    pubsub.subscribe(Actions.setFilter.key, (_, filter) => {
      const filters = this.state.filters

      if (filters.has(filter)) {
        filters.delete(filter)
      } else {
        filters.add(filter)
      }

      this.setState({
        filters
      })
    })
  }

  componentDidUpdate() {
    console.log("filters", [...this.state.filters])
  }

  render = props => (
    <React.Fragment>
      {[...this.state.filters].map(filter => <span>FILTER: {filter}</span>)}
      <Header />
      <Controls>
        <GroupingControls />
        <ImageSizeInput
          imageSize={this.state.imageSize}
          onChange={imageSize => this.setState({ imageSize })}
        />
      </Controls>
      <Images images={this.props.images} imageSize={this.state.imageSize} />
      {globalCSS}
    </React.Fragment>
  )
}

export default Index
