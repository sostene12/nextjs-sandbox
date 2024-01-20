import React, { CSSProperties } from 'react';
import { Html,Body,Container,Link,Text,Preview,Tailwind } from '@react-email/components';

const WelcomeTemplate = ({name}:{name:string}) => {
  return (
    <Html>
        <Preview>Welcome aboard!</Preview>
        <Tailwind>
        <Body className='bg-white'>
            <Container>
                <Text className='font-bold text-3xl'>Hello {name}</Text>
                <Link href='https://codewithmosh.com'>www.codewithmosh.com</Link>
            </Container>
        </Body>
        </Tailwind>
    </Html>
  )
}

const body:CSSProperties = {
    background:'#fff',

}

export default WelcomeTemplate