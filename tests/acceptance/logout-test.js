import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import MockAuthService from '../stubs/auth-service';

module('Acceptance | logout', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:auth', MockAuthService);
  })

  test('visiting /teams and clickin "logout"', async function(assert) {
    this.owner.lookup('service:auth').currentUserId = '1';
    await visit('/teams/linkedin'); // Go to the /teams url
    
    assert.ok(currentURL().startsWith('/teams'));

    await click('.team-sidebar__logout-button');

    assert.equal(currentURL(), '/login');
  });
});
