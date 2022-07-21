from flask import Flask, jsonify
from blocks import Blockchain


# $env:FLASK_APP="index.py"
app = Flask(__name__)



# create object
blockchain = Blockchain()


# start and create a new block.
@app.route("/")
def index():
  return jsonify({"message": "Welcome to the blockchain"})  


# create new block chain
@app.route("/addblock", methods=['POST'])
def add():
  previous_block = blockchain.print_previous_block()
  previous_proof = previous_block['proof']
  proof = blockchain.proof_of_work(previous_proof)
  previous_hash = blockchain.hash(previous_block)
  block = blockchain.create_block(proof, previous_hash)
  
  response = {'message': 'A block is MINED/Created',
				'index': block['index'],
				'timestamp': block['timestamp'],
				'proof': block['proof'],
				'previous_hash': block['previous_hash']}
  
  return jsonify(response), 200

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



if __name__ == "__main__":
  app.run(debug=True)