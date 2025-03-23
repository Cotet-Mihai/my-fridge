from datetime import datetime

from config import db

class Food(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    brand = db.Column(db.String(50), unique=False)
    name = db.Column(db.String(50), unique=False)
    category = db.Column(db.String(30), unique=False)
    date_added = db.Column(db.DateTime, unique=False, default=datetime.now)
    date_expiration = db.Column(db.DateTime, unique=False)
    allergens = db.Column(db.String(30), unique=False)

    def to_json(self):
        return {
            "id": self.id,
            "brand": self.brand,
            "name": self.name,
            "category": self.category,
            "date_added": self.date_added,
            "date_expiration": self.date_expiration,
            "allergens": self.allergens
        }