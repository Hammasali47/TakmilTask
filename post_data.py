import requests

url = "http://localhost:3000/api/schools"

# Get user input or data from some other source
school_name = input("Enter school name: ")
school_info = input("Enter school info: ")
address = input("Enter address: ")
addressInfo = input("Enter addressInfo: ")
country = input("Enter country: ")
org_name = input("Enter organization name: ")
org_info = input("Enter organization info: ")

# Dynamically construct JSON payload
json_data = {
    "name": school_name,
    "schoolInfo" : school_info,
    "address": {
        "address": address,
        "addressInfo": addressInfo,
    },
    "organization": {
        "name": org_name,
        "organizationInfo": org_info
    }
}

# Send POST request to create a new school
response = requests.post(url, json=json_data)

# Print the response
print("POST Response:")
print(response.status_code)
print(response.json())
