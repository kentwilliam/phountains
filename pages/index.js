const fetch = require("isomorphic-unfetch")
const React = require("react")

const Controls = require("../components/Controls.js")
const Header = require("../components/Header.js")
const ImageSizeInput = require("../components/ImageSizeInput.js")
const Images = require("../components/Images.js")

const globalCSS = require("../styles/global.css.js")

class Index extends React.PureComponent {
  state = {
    imageSize: 50
  }

  render(props) {
    return (
      <React.Fragment>
        <Header />
        <Controls>
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
}

Index.getInitialProps = async ({ req: request }) => {
  const response = await fetch("http://localhost:3001")
  const { images } = await response.json()
  return { images }
}

export default Index
