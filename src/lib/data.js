export const projects = [
    {
        "name": "Digital Menu Application for Mediaan",
        "longdescription": "Mediaan tasked us to make a digital menu application. this was to revolutionize the dining experience. You could scan, order and invite others seamlessly with a QR code. This application also aimed to streamline kitchen operationsand enhance the workflow efficiency.",
        "description":
            "This project was a group project given to us by Mediaan, through Fontys. It significantly improved my knowledge of Javascript through React.\n",
        "features": [
            "Inviting other table members to join the order session",
            "Order food as a group, each person can individually select their food",
            "Allowing kitchen staff to view and manage orders"
        ],
        "cover": "/menu-project-cover.png",
        "contributions": [
            {"description": "Creating various project documents", "images": []},
            {"description": "Implementing the back-end CI/CD", "images": []},
            {"description": "Creating the menu page and the functionalities with the back-end + database", "images": ["/menuproject/menupage.png"]},
            {"description": "Implementing a Google SSO, with various levels of access based on a token created, which is verified in the back-end.", "images": ["/menuproject/googlesso.png"]},
            {"description": "Modified files to create user and staff access, with different views based on login. When you had staff access, you would be able to see the kitchen view, but as a user, this page would show an error 404.",
                "images": ["/menuproject/kitchenliveview.png"]
            }
        ],
        "id": 0
    }
]

