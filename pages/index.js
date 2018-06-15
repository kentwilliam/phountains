// @format

const Actions = require("./actions/Actions.js")
const GroupingControls = require("./components/GroupingControls.js")
const Header = require("./components/Header.js")
const ImageGridLockCheckbox = require("./components/ImageGridLockCheckbox.js")
const ImageMarginInput = require("./components/ImageMarginInput.js")
const ImageSizeInput = require("./components/ImageSizeInput.js")
const Images = require("./components/Images.js")
const React = require("react")
const StatusBar = require("./components/StatusBar.js")
const fetch = require("isomorphic-unfetch")
const globalCSS = require("./styles/global.css.js")
const pubsub = require("pubsub-js")

class Filters {
  _value = new Set()

  toggle(filter) {
    if (this._value.has(filter)) {
      this._value = this._value.delete(filter)
    } else {
      this._value = this._value.add(filter)
    }
    return this
  }

  map(callback) {
    return [...this._value].map(callback)
  }
}

const DEFAULT_STATE = {
  filters: new Filters(),
  imageMargin: 10,
  imageSize: 200,
  isGridLockEnabled: true
}

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
]

class Index extends React.Component {
  state = DEFAULT_STATE

  static getInitialProps = async ({ req: request }) => {
    const response = await fetch("http://localhost:3001")
    const { images } = await response.json()

    // Group images by date
    // TODO: group images by moment. Naive idea: parse images and group any
    // sequence with less than 10 minute gaps

    return {
      images: images.reduce((result, image) => {
        let date

        try {
          const [year, month, day] = image.EXIFData.image.ModifyDate.split(
            " "
          )[0]
            .split(":")
            .map(Number)

          let dayOfWeek = DAYS[new Date(`${month}-${day}-${year}`).getDay()]
          date = `${dayOfWeek}, ${month}/${day}/${year}`
        } catch (error) {
          console.log({ error })
          date = "Unknown"
        }

        return { ...result, [date]: (result[date] || []).concat([image]) }
      }, {})
    }
  }

  componentDidMount() {
    pubsub.subscribe(Actions.setFilter.key, (_, filter) => {
      this.setState({ filters: this.state.filters.toggle(filter) })
    })
  }

  render() {
    return (
      <div id="app" className="mounted">
        {this.state.filters.map(filter => <span>FILTER: {filter}</span>)}
        <Header>
          <GroupingControls />
        </Header>
        <Images
          isGridLockEnabled={this.state.isGridLockEnabled}
          images={this.props.images}
          imageMargin={this.state.imageMargin}
          imageSize={this.state.imageSize}
        />
        <StatusBar>
          <ImageSizeInput
            imageSize={this.state.imageSize}
            onChange={imageSize => this.setState({ imageSize })}
          />
          <ImageMarginInput
            imageMargin={this.state.imageMargin}
            onChange={imageMargin => this.setState({ imageMargin })}
          />
          <ImageGridLockCheckbox
            isGridLockEnabled={this.state.isGridLockEnabled}
            onChange={() =>
              this.setState({
                isGridLockEnabled: !this.state.isGridLockEnabled
              })
            }
          />
        </StatusBar>
        {globalCSS}
      </div>
    )
  }
}

export default Index
