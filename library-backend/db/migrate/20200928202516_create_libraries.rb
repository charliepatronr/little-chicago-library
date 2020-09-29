class CreateLibraries < ActiveRecord::Migration[6.0]
  def change
    create_table :libraries do |t|
      t.string :location
      t.float :lat
      t.float :long
      t.string :name

      t.timestamps
    end
  end
end
