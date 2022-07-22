from flask import Flask, jsonify, request
from blocks import Blockchain
from flask_cors import CORS

# db - functions
from db import checkBatch, insertMeds



# $env:FLASK_APP="index.py"
app = Flask(__name__)
CORS(app)


# create object
blockchain = Blockchain()


# start and create a new block.
@app.route("/")
def index():
  return jsonify({"message": "Welcome to the blockchain"})  


# create new block chain
@app.route("/add", methods=['POST'])
def add():
  if request.method == 'POST':
    data = request.get_json()
    # print( data )
    # return jsonify({"message":"got the data"}), 200
    previous_block = blockchain.print_previous_block()
    previous_proof = previous_block['proof']
    proof = blockchain.proof_of_work(previous_proof)
    previous_hash = blockchain.hash(previous_block)
    block = blockchain.create_block(proof, previous_hash, data)
    print( block )
    res =  insertMeds( proof, data );
    
    # response = {'message': 'A block is MINED/Created',
    #       'index': block['index'],
    #       'timestamp': block['timestamp'],
    #       'proof': block['proof'],
    #       'previous_hash': block['previous_hash'],
    #       'data' : block['data']
    #       };
    
    return jsonify(res), 200
  
  else:
    return jsonify({"message": "Please use POST method"}), 400

# show all data in the blockchain
@app.route("/showall")
def showAll():
  response = {'chain': blockchain.chain,
				'length': len(blockchain.chain)}
  return jsonify(response), 200



# verify the blockchain
@app.route("/verify")
def verify():
  is_valid = blockchain.chain_valid(blockchain.chain)
  if is_valid:
    response = {'message': 'The blockchain is valid'}
  else:
    response = {'message': 'The blockchain is not valid'}
  return jsonify(response), 200



# check a medicines batch number
@app.route("/batch", methods=['POST'])
def batch_number():
  if request.method == 'POST':
    data = request.get_json()
    print( data )
    res = checkBatch( data['batch'] )
    return jsonify({"message": res }), 400
  else:
    return jsonify({"message": "Please use POST method"}), 400
    



if __name__ == "__main__":
  app.run(debug=True)