import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import { Grid, Modal, Button, Header, Icon } from 'semantic-ui-react';
import SearchResultsList from './SearchResultsList';
import SelectedRepository from './SelectedRepository';


class IndexView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      gitRepository: {},
      selectedGitRepository: false
    };
  }
  
  closeModal = () => this.setState({ isModalOpen: false });
  
  confirmStation = () => {
    this.setState({
      searchTerm: '',
      isModalOpen: false,
      selectedGitRepository: this.state.gitRepository
    });
  };
  
  render() {
    const { selectedGitRepository, gitRepository, searchTerm, isTouched, isModalOpen } = this.state;
    
    return (
      <Grid container>
        
        <SelectedRepository
          selectedGitRepository={selectedGitRepository}
          deleteSelection={() => this.setState({ selectedGitRepository: false })}
        />
        
        <Grid.Row column={1} centered>
          <Grid.Column>
            <Input
              fluid
              placeholder='Name of repository...'
              onChange={(event) => this.setState({
                searchTerm: event.target.value,
                isTouched: event.target.value.length > 0
              })}
            />
          </Grid.Column>
        </Grid.Row>
        
        <SearchResultsList
          selectedGitRepository={selectedGitRepository}
          openModal={(gitRepository) => this.setState({ isModalOpen: true, gitRepository })}
          inputHasCharacterTyped={isTouched}
          searchTerm={searchTerm}
        />
        
        <Modal open={isModalOpen} basic size='small'>
          <Header
            style={{ textAlign: 'center' }}
            content={`Do you want to add ${gitRepository.node && gitRepository.node.name} on your list?`}
          />
          <Modal.Actions>
            <Grid>
              <Grid.Row centered columns={2}>
                <Grid.Column textAlign='center'>
                  <Button color='green' onClick={this.confirmStation} inverted>
                    <Icon name='checkmark' /> Yes, I want
                  </Button>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                  <Button color='red' onClick={this.closeModal} inverted>
                    <Icon name='checkmark' /> No thanks
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Modal.Actions>
        </Modal>
      </Grid>
    );
  }
}

export default (IndexView);
