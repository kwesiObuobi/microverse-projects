require_relative "enumerable"

class MyList
  include MyEnumerable

  def initialize(list)
    @list = list
  end

  def each
    @list.each
  end
end

lst = MyList.new([1, 2, 3, 4])
puts(lst.all? { |e| e < 5 })
puts(lst.all? { |e| e > 5 })
puts(lst.any? { |e| e == 2 })
puts(lst.any? { |e| e == 5 })
print(lst.filter(&:even?))