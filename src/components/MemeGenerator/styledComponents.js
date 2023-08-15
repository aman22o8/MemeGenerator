// Style your components here
import styled from 'styled-components'

export const MainContainer = styled.div`
  margin: 20px;
  display: flex;
`

export const FormContainer = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
`
export const MainHeading = styled.h1`
  font-size: 45px;
  font-weight: 600;
  color: #35469c;
`

export const LabelHeading = styled.label`
  font-size: 15px;
  margin-bottom: 1px;
  margin-top: 10px;
  color: #5a7184;
`
//   ${props => {
//     console.log(props.myvalue)
//     return props.myvalue > 2 ? lightcyan : lightgreen
//   }}
export const InputHeading = styled.input`
  height: 35px;
  width: 320px;
  background-color: ${props => {
    console.log(props.myvalue)
    return props.myvalue > 6 ? 'lightyellow' : 'lightgreen'
  }};
  color: #0b69ff;
  font-size: 16px;
  padding-left: 20px;
  border-radius: 8px;
  border: 1px solid #7e858e;
  outline: none;
`
export const SelectOptions = styled.select`
  //   padding-left: 10px;
  height: 28px;
  width: 200px;
  color: #0b69ff;
  font-size: 18px;
  padding-left: 20px;
  border-radius: 8px;
  border: 1px solid #7e858e;
`
export const OptionsHeading = styled.option`
  font-size: 18px;
  font-weight: 600;
  color: #35469c;
  :checked {
    background-color: lightseagreen;
  }
`
export const Button = styled.button`
  margin-top: 25px;
  height: 38px;
  width: 150px;
  color: #ffffff;
  font-size: 18px;
  text-align: center;
  border-radius: 8px;
  border: 0px none;
  background-color: #0b69ff;
`
export const DisplayContainer = styled.div`
  background-size: cover;
  background-image: url(${props => props.imageValue});
  width: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 25px 10px;
`
export const TopHeading = styled.h1`
  font-size: ${props => props.mysize}px;
  font-weight: 600;
  color: #ffffff;
`
export const BottomHeading = styled(TopHeading)`
  font-size: ${props => props.mysize}px;
  font-weight: 600;
  color: #ffffff;
`
