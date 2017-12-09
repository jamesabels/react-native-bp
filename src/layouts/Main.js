import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class MainLayout extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{this.props.header}</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    {this.props.children}
                </Content>
                <Footer>
                    {this.props.footer}
                </Footer>
            </Container>
        );
    }
}