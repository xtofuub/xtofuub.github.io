fetch('https://api.github.com/repos/xtofuub/xtofuub.github.io/commits/main')
  .then(r => r.json())
  .then(j => console.log('Latest commit:', j.sha, j.commit.message))
  .catch(e => console.error(e));
