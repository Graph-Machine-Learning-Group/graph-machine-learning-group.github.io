window.addEventListener('DOMContentLoaded', event => {

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const navIcon = document.getElementById('navbar-menu-icon');

    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .toggle-navbar')
    );
    navbarToggler.addEventListener('click', () => {
        navIcon.classList.toggle('open');
    });
    responsiveNavItems.map(function(responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Add copy button to code blocks
    const copyButtonLabel = "Copy";

    // use a class selector if available
    let blocks = document.querySelectorAll("pre");

    blocks.forEach((block) => {
    // only add button if browser supports Clipboard API
    if (navigator.clipboard) {
        let button = document.createElement("button");

        button.innerText = copyButtonLabel;
        block.appendChild(button);

        button.addEventListener("click", async () => {
        await copyCode(block, button);
        });
    }
    });

    async function copyCode(block, button) {
        let code = block.querySelector("code");
        let text = code.innerText;

        await navigator.clipboard.writeText(text);

        // visual feedback that task is completed
        button.innerText = "Copied";

        setTimeout(() => {
            button.innerText = copyButtonLabel;
        }, 1000);
    }

});
