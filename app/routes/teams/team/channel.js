import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class TeamsTeamChannelRoute extends Route {
  //hook
  async model({ channelId }) {
    const { teamId } = this.paramsFor('teams.team');
    const resp = await fetch(`/api/teams/${teamId}/channels/${channelId}`);
    return resp.json();
  }
}
