import {Card, Top, Image, Body, Name, Degree, Date, Grade, Description, Span, Expiry} from "./Certificate_card_style"
import React from 'react'


const CertificateCard = ({ certificate }) => {
    return (
        <Card>
            <Top>
                <Image src={certificate.img} />
                <Body>
                    <Name>{certificate.name}</Name>
                    <Degree>{certificate.organization}</Degree>
                    <Degree>{certificate.platform}</Degree>
                    {/* <Date>{certificate.date}</Date>
                    <Expiry>{certificate.exp}</Expiry> */}
                </Body>
            </Top>
            <Description>
                {certificate?.desc &&
                    <Span>{certificate?.desc}</Span>
                }
            </Description>
            {/* <Description>
                <Span>{certificate.desc}</Span>
            </Description> */}
        </Card>
    )
}

export default CertificateCard