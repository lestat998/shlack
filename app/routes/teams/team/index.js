import Route from '@ember/routing/route';

export default class TeamsTeamIndexRoute extends Route {
    //hook
    async beforeModel(transition) {
      super.beforeModel(transition);
      const { id, channels } = this.modelFor('teams.team');
      if (channels.length > 0) {
        this.replaceWith('teams.team.channel', id, channels[0].id);
      }
    }
}
