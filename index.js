var emailField = document.querySelector('.email-field');
var hoverMessage = emailField.querySelector('.hover-message');

emailField.addEventListener('mouseover', function() {
    hoverMessage.style.display = 'block';
});

emailField.addEventListener('mouseout', function() {
    hoverMessage.style.display = 'none';
});
