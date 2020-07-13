import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | logout', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /teams and clickin "logout"', async function(assert) {
    await visit('/teams'); // Go to the /teams url
    
    assert.equal(currentURL(), '/teams');

    await click('.team-sidebar__logout-button');

    assert.equal(currentURL(), '/login');
  });
});
