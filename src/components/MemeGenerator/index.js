import {Component} from 'react'
import {
  MainContainer,
  FormContainer,
  MainHeading,
  LabelHeading,
  InputHeading,
  SelectOptions,
  OptionsHeading,
  Button,
  DisplayContainer,
  TopHeading,
  BottomHeading,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    enteredUrl: '',
    enteredTop: '',
    enteredBottom: '',
    enteredFont: '',
    activeFontSize: fontSizesOptionsList[0].optionId,
    imageUrl: '',
    topText: '',
    bottomText: '',
  }

  changeImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  changetopText = event => {
    this.setState({topText: event.target.value})
  }

  changebottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  changeOptions = event => {
    this.setState({activeFontSize: event.target.value})
  }

  submitOption = event => {
    const {activeFontSize, bottomText, topText, imageUrl} = this.state
    event.preventDefault()
    this.setState({
      enteredFont: activeFontSize,
      enteredBottom: bottomText,
      enteredTop: topText,
      enteredUrl: imageUrl,
    })
  }

  render() {
    const {
      enteredFont,
      enteredUrl,
      enteredTop,
      enteredBottom,
      activeFontSize,
      topText,
      bottomText,
      imageUrl,
    } = this.state

    return (
      <div>
        <MainContainer>
          <FormContainer onSubmit={this.submitOption}>
            <MainHeading>Meme Generator</MainHeading>
            <LabelHeading htmlFor="ImageURL">Image URL</LabelHeading>
            <InputHeading
              value={imageUrl}
              id="ImageURL"
              onChange={this.changeImageUrl}
              type="text"
              placeholder="Enter the Image URL"
              myvalue={imageUrl.length}
            />

            <LabelHeading htmlFor="TopText">Top Text</LabelHeading>
            <InputHeading
              id="TopText"
              value={topText}
              myvalue={topText.length}
              onChange={this.changetopText}
              type="text"
              placeholder="Enter the Top Text"
            />
            <LabelHeading htmlFor="BottomText">Bottom Text</LabelHeading>
            <InputHeading
              id="BottomText"
              myvalue={bottomText.length}
              value={bottomText}
              onChange={this.changebottomText}
              type="text"
              placeholder="Enter the Bottom Text"
            />

            <LabelHeading htmlFor="FontSize">Font Size</LabelHeading>
            <SelectOptions
              id="FontSize"
              onChange={this.changeOptions}
              value={activeFontSize}
              type="text"
              placeholder="Enter the Bottom Text"
            >
              {fontSizesOptionsList.map(each => (
                <OptionsHeading key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </OptionsHeading>
              ))}
            </SelectOptions>
            <Button type="submit">Generate</Button>
          </FormContainer>

          <DisplayContainer data-testid="meme" imageValue={enteredUrl}>
            <TopHeading mysize={enteredFont}>{enteredTop}</TopHeading>
            <BottomHeading mysize={enteredFont}>{enteredBottom}</BottomHeading>
          </DisplayContainer>
        </MainContainer>
      </div>
    )
  }
}

export default MemeGenerator
