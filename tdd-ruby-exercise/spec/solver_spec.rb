require_relative '../solver'

describe Solver do
  before(:each) do
    @s = Solver.new
  end

  context 'When testing the factorial method' do
    it 'returns the correct factorial of the given number' do
      expect(@s.factorial(5)).to eq(120)
      expect(@s.factorial(0)).to eq(1)
      expect(@s.factorial(1)).to eq(1)
      expect(@s).to be_instance_of(Solver)
    end

    it 'raises an error when "num" is less than 0' do
      expect { @s.factorial(-2) }.to raise_error(ArgumentError)
    end
  end

  context 'When testing the reverse method' do
    it 'returns the correct reversed word' do
      expect(@s.reverse('hello')).to eq('olleh')
      expect(@s.reverse('')).to eq('')
    end
  end

  context 'When testing the fizzbuzz method' do
    it 'returns the correct fizzbuzz value' do
      expect(@s.fizzbuzz(3)).to eq('fizz')
      expect(@s.fizzbuzz(5)).to eq('buzz')
      expect(@s.fizzbuzz(15)).to eq('fizzbuzz')
      expect(@s.fizzbuzz(7)).to eq('7')
    end
  end
end
