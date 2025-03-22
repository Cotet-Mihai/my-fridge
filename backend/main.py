from flask import request, jsonify
from config import app, db
from model import Food

@app.route("/foods", methods=["GET"])
def get_foods():
    foods = Food.query.all()
    json_foods = list(map(lambda x: x.to_json(), foods))

    return jsonify({"foods": json_foods})

@app.route('/create_food', methods=['POST'])
def create_food():
    brand = request.json.get('brand')
    name = request.json.get('name')
    category = request.json.get('category')
    date_added = request.json.get('date_added')
    date_expiration = request.json.get('date_expiration')
    allergens = request.json.get('allergens')

    if not brand or not name or not category or not date_expiration or not date_added or not allergens:
        return jsonify({"message": "You must include all info"}), 400

    new_food = Food(
        brand=brand,
        name=name,
        category=category,
        date_added=date_added,
        date_expiration=date_expiration,
        allergens=allergens
    )

    try:
        db.session.add(new_food)
        db.session.commit()

    except Exception as e:
        return jsonify({"message": str(e)}), 400

    return jsonify({"message": "Food created!"}), 201

@app.route("/update_food/<int:food_id>", methods=['PATCH'])
def update_food(food_id):
    food = Food.query.get(food_id)

    if not food:
        return jsonify({"message": "Food not found"}), 404

    data = request.json
    food.brand = data.get("brand", food.brand)
    food.name = data.get("name", food.name)
    food.category = data.get("category", food.category)
    food.date_added = data.get("date_added", food.date_added)
    food.date_expiration = data.get("date_expiration", food.date_expiration)
    food.allergens = data.get("allergens", food.allergens)

    db.session.commit()

    return jsonify({"message": "Food updated."}), 200

@app.route('/delete_food/<int:food_id>', methods=['DELETE'])
def delete_food(food_id):
    food = Food.query.get(food_id)

    if not food:
        return jsonify({"message": "Food not found"}), 404

    db.session.delete(food)
    db.session.commit()

    return jsonify({"message": "Food deleted!"}), 200

if __name__ == '__main__':
    with app.app_context():
        db.create_all()

    app.run(debug=True)