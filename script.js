fetch('data.json')
.then(response => response.json())
.then(data => {
    const profileDiv =
    document.getElementById('profile');
    profileDiv.innerHTML = `
    <p><straong>Name:</strong>${data.name}</p>
    <p><straong>Email:</strong>${data.email}</p>
    <p><straong>Age:</strong>${data.age}</p>`;

})
.catch(error => {
    console.error('Error loading JSON:',error);
});