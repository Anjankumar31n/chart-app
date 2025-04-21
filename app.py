from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/data')
def get_data():
    chart_type = request.args.get('type', 'bar')
    filter_by = request.args.get('filter', 'month')

    data = {
        "labels": ["Jan", "Feb", "Mar", "Apr", "May"],
        "datasets": [
            {
                "label": "Product A",
                "data": [10, 20, 15, 30, 25],
                "backgroundColor": "rgba(75, 192, 192, 0.5)"
            },
            {
                "label": "Product B",
                "data": [5, 15, 10, 20, 18],
                "backgroundColor": "rgba(255, 99, 132, 0.5)"
            }
        ]
    }
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
