document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#story-form');
    const storyOutput = document.querySelector('#story-output');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const title = document.querySelector('#title').value;
      const author = document.querySelector('#author').value;
      const story = document.querySelector('#story').value;
  
      const storyContent = document.createElement('div');
      storyContent.classList.add('story-output');
  
      const titleElement = document.createElement('h2');
      titleElement.textContent = title;
      storyContent.appendChild(titleElement);
  
      const authorElement = document.createElement('p');
      authorElement.textContent = `By ${author}`;
      storyContent.appendChild(authorElement);
  
      const storyText = document.createElement('pre');
      storyText.textContent = story;
      storyContent.appendChild(storyText);
  
      storyOutput.innerHTML = '';
      storyOutput.appendChild(storyContent);
    });
  });
  