from pymongo import MongoClient
from bson import ObjectId
import bcrypt

# Connection parameters
mongo_uri = "mongodb://mongodb:27017"
database_name = "comwell"

# Sample data
hotel_data = [
    {
        "name": "Comwell Grand Hotel",
        "location": "City Center",
        "rooms": [
            {
                "_id": ObjectId(),
                "name": "Double Bedroom",
                "description": "Spacious double room with city view",
                "type": "Double",
                "price": 200,
                "isBooked": False,
                "bookingType":0,
                "amenities": ["WiFi", "TV", "Air Conditioning"],
            },
            {
                "_id": ObjectId(),
                "name": "Suite",
                "description": "Luxurious suite with separate living area",
                "type": "Suite",
                "price": 350,
                "isBooked": False,
                "bookingType":0,
                "amenities": ["Mini Bar", "Free Breakfast", "Jacuzzi"],
            },
            {
                "_id": ObjectId(),
                "name": "Big meeting room",
                "description": "Spacious professional room perfect for meetings",
                "type": "Meetings",
                "price": 800,
                "isBooked": False,
                "bookingType":1,
                "amenities": ["WiFi", "TV", "Air Conditioning"],
            },
            {
                "_id": ObjectId(),
                "name": "Party lounge",
                "description": "Lounge for parties and festivities",
                "type": "Parties",
                "price": 600,
                "isBooked": False,
                "bookingType":2,
                "amenities": ["WiFi",],
            }
        ],
    },
    {
        "name": "Comwell Seaside Resort",
        "location": "Oceanfront",
        "rooms": [
            {
                "_id": ObjectId(),
                "name": "Standard Room",
                "description": "Comfortable room with ocean view",
                "type": "Single",
                "price": 150,
                "isBooked": False,
                "bookingType": 0,
                "amenities": ["Swimming Pool", "Fitness Center", "Restaurant"],
            },
            {
                "_id": ObjectId(),
                "name": "Family Suite",
                "description": "Spacious suite for the whole family",
                "type": "Suite",
                "price": 300,
                "isBooked": False,
                "bookingType": 0,
                "amenities": ["Kids Play Area", "Free WiFi", "Room Service"],
            },
            {
                "_id": ObjectId(),
                "name": "Executive Room",
                "description": "Elegant room with executive amenities",
                "type": "Double",
                "price": 250,
                "isBooked": False,
                "bookingType": 0,
                "amenities": ["Coffee Maker", "Work Desk", "In-room Safe"],
            },
            {
                "_id": ObjectId(),
                "name": "Big meeting room",
                "description": "Spacious professional room perfect for meetings",
                "type": "Meetings",
                "price": 800,
                "isBooked": False,
                "bookingType": 1,
                "amenities": ["WiFi", "TV", "Air Conditioning"],
            },
            {
                "_id": ObjectId(),
                "name": "Party lounge",
                "description": "Lounge for parties and festivities",
                "type": "Parties",
                "price": 600,
                "isBooked": False,
                "bookingType": 2,
                "amenities": ["WiFi",],
            }
        ]
    },
]
# 
#bcrypt.hashpw("testpassword".encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
# Test user data
test_user_data = {
    "username": "testuser",
    "password": bcrypt.hashpw("testpassword".encode('utf-8'), bcrypt.gensalt()).decode('utf-8'),
    "email": "testuser@example.com",
    "phone_number": "1234567890",
    "full_name": "Test User",
}

# Connect to MongoDB
client = MongoClient(mongo_uri)
database = client[database_name]
hotels_collection = database["hotels"]
users_collection = database["users"]

# Insert data into the 'users' collection
users_collection.insert_one(test_user_data)

# Insert data into the 'hotels' collection
result = hotels_collection.insert_many(hotel_data)

# Print the result
print(f"Inserted {len(result.inserted_ids)} documents into the 'hotels' collection.")

# Close the MongoDB connection
client.close()
