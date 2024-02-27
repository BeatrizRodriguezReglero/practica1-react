import Button from '../button/Button'
import Container from '../container/Container'
import List from '../list/List'
import Subtitle from '../subtitle/Subtitle'
import Text from '../text/Text'
import Title from '../title/Title'
import style from './containerAll.module.css'


const ContainerAll =()=>{
    return (
        <>
    <div className={style.containerAll}>
        <Container color='white' >
            <Title/> 
            <Subtitle color='green'>30-day, hassle-free money back guarantee</Subtitle>
            <Text color='grey'>Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</Text>
        </Container>
        <Container color='blue' className={`${style.item2}`}>
           <Subtitle >Monthly Subscription</Subtitle>
            <Text size='big' padding='bottom'>$29<span className= {`${style.span}`}>per month</span></Text>
           <Text>Full access for less than $1 a day</Text>
           <Button>Sign Up</Button>
        </Container>
        <Container color='light-blue' className={`${style.item3}`} >
            <Subtitle>Why Us</Subtitle>
            <List></List>
        </Container>
        
    </div>
    </>)}
export default ContainerAll