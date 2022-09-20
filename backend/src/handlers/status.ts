import { Handler } from "../global"

/**
 * Status are routes that report how the server is functioning.
 * No important or confidential data should ever be reported.
 * All routes in Status are not privileged.
 */
const status: Handler = ({ application, }) => {
    application.get('/status', (req, res) => {
        res.status(200).send({
            up: {
                since: parseFloat(process.env.STARTED_AT ?? "-1"),
                time: Date.now() - parseFloat(process.env.STARTED_AT ?? "-1"),
            },
        });
    });
};
export default status;