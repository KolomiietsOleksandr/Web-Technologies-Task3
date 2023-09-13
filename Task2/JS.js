function applyStyle(style) {
    const styleElement = document.createElement('style');
    styleElement.id = 'table-style';
    document.head.appendChild(styleElement);

    const styleSheet = document.getElementById('table-style');
    switch (style) {
        case 1:
            styleSheet.innerHTML = `
            table {
                border-collapse: collapse;
                width: 70%;
                margin: 20px 0;
                border: 5px solid #ccc;
            }
            
            th, td {
                padding: 10px;
                text-align: center;
            }
            
            th {
                background-color: #3498db;
                color: #fff;
                border-bottom: 2px solid #2980b9;
            }
            
            tr:nth-child(odd) {
                background-color: #f2f2f2;
            }
            
            tr:nth-child(even) {
                background-color: #e5e5e5;
            }
            
            td:before {
                content: "⭐️ ";
            }
                }`;
            break;
        case 2:
            styleSheet.innerHTML = `
                table {
                    border-collapse: collapse;
                    width: 100%;
                    margin: 20px 0;
                    border: 3px double #d35400;
                }
                
                th, td {
                    padding: 8px 16px;
                    text-align: center;
                }
                
                th {
                    background-color: #e74c3c;
                    color: #fff;
                    border: 2px solid #c0392b;
                }
                
                tr:nth-child(odd) {
                    background-color: #f9ebc0;
                }
                
                tr:nth-child(even) {
                    background-color: #f3d250;
                }
                
                td:before {
                    content: "🚀 ";
                }`;
            break;
        case 3:
            styleSheet.innerHTML = `
                table {
                    border-collapse: collapse;
                    width: 100%;
                    border: 2px solid #27ae60;
                }
                
                th, td {
                    padding: 8px;
                    text-align: center;
                    border: 1px solid #27ae60;
                }
                
                th {
                    background-color: #27ae60;
                    color: #fff;
                }
                
                tr:nth-child(odd) {
                    background-color: #d5e8d4;
                }
                
                tr:nth-child(even) {
                    background-color: #b3d3b1;
                }
                
                td:before {
                    content: "🌿 ";
                }`;
            break;
        default:
            styleSheet.innerHTML = `
                table {
                    border-collapse: collapse;
                    width: 100%;
                }`;
    }
}
