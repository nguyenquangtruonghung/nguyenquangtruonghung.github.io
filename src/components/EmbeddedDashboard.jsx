import React from 'react';

const EmbeddedDashboard = () => {
    return (
        <div>
            <iframe
                title="MongoDB Dashboard"
                width="100%"
                height="600"
                src="https://charts.mongodb.com/charts-datn-chror/public/dashboards/39191476-9955-4e0f-b940-a5d82784c504"
                frameborder="0"
            ></iframe>
        </div>
    );
};

export default EmbeddedDashboard;
