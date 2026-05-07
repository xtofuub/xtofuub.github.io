fetch('https://api.github.com/users/xtofuub/repos?per_page=100&sort=updated')
  .then(r => r.json())
  .then(repos => {
    repos.forEach(r => {
      console.log(`- ${r.name} [${r.language}]: ${r.description}`);
    });
  });
