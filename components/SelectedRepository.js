import React from 'react';
import { Segment, Grid, Image } from 'semantic-ui-react';


class SelectedRepository extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedGitRepository: props.selectedGitRepository };
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({ selectedGitRepository: nextProps.selectedGitRepository });
  }
  
  render() {
    const { selectedGitRepository } = this.state;
    if (selectedGitRepository)
      return (
        <Grid.Row columns={3}>
          <Grid.Column>
            <Image src={selectedGitRepository.node && selectedGitRepository.node.owner.avatarUrl} />
          </Grid.Column>
          <Grid.Column>
            <Segment secondary inverted color='blue' tertiary textAlign='left'>
              Repo: {selectedGitRepository.node && selectedGitRepository.node.name}
            </Segment>
            <Segment secondary inverted color='green' tertiary textAlign='left'>
              User: {selectedGitRepository.node && selectedGitRepository.node.owner.login}<br />
              Stargazers: {selectedGitRepository.node && selectedGitRepository.node.stargazers.totalCount}<br />
              Watchers: {selectedGitRepository.node && selectedGitRepository.node.watchers.totalCount}<br />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <a
              style={{ cursor: 'pointer' }}
              href={selectedGitRepository.node && `https://github.com${selectedGitRepository.node.owner.resourcePath}`}
              ref='noopener'
              target="_blank"
            >
              <Segment secondary textAlign='center'>
                Visit GitHub Profile
              </Segment>
            </a>
            <Segment
              onClick={this.props.deleteSelection}
              secondary
              inverted
              color='red'
              tertiary
              textAlign='center'
              style={{ cursor: 'pointer' }}
            >
              Delete card
            </Segment>
          </Grid.Column>
        </Grid.Row>
      );
    return <div />;
  }
}

export default (SelectedRepository);
